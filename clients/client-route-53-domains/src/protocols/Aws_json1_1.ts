// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  AssociateDelegationSignerToDomainRequest,
  BillingRecord,
  CancelDomainTransferToAnotherAwsAccountRequest,
  CheckDomainAvailabilityRequest,
  CheckDomainTransferabilityRequest,
  Consent,
  ContactDetail,
  DeleteDomainRequest,
  DeleteTagsForDomainRequest,
  DisableDomainAutoRenewRequest,
  DisableDomainTransferLockRequest,
  DisassociateDelegationSignerFromDomainRequest,
  DnssecLimitExceeded,
  DnssecSigningAttributes,
  DomainLimitExceeded,
  DomainPrice,
  DomainSummary,
  DuplicateRequest,
  EnableDomainAutoRenewRequest,
  EnableDomainTransferLockRequest,
  ExtraParam,
  FilterCondition,
  GetContactReachabilityStatusRequest,
  GetDomainDetailRequest,
  GetDomainDetailResponse,
  GetDomainSuggestionsRequest,
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
  Nameserver,
  OperationLimitExceeded,
  OperationStatus,
  OperationSummary,
  OperationType,
  PriceWithCurrency,
  PushDomainRequest,
  RegisterDomainRequest,
  RejectDomainTransferFromAnotherAwsAccountRequest,
  RenewDomainRequest,
  ResendContactReachabilityEmailRequest,
  ResendOperationAuthorizationRequest,
  RetrieveDomainAuthCodeRequest,
  SortCondition,
  Tag,
  TLDRulesViolation,
  TransferDomainRequest,
  TransferDomainToAnotherAwsAccountRequest,
  UnsupportedTLD,
  UpdateDomainContactPrivacyRequest,
  UpdateDomainContactRequest,
  UpdateDomainNameserversRequest,
  UpdateTagsForDomainRequest,
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
  const headers: __HeaderBag = sharedHeaders("AcceptDomainTransferFromAnotherAwsAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateDelegationSignerToDomainCommand
 */
export const se_AssociateDelegationSignerToDomainCommand = async (
  input: AssociateDelegationSignerToDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateDelegationSignerToDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand
 */
export const se_CancelDomainTransferToAnotherAwsAccountCommand = async (
  input: CancelDomainTransferToAnotherAwsAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelDomainTransferToAnotherAwsAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CheckDomainAvailabilityCommand
 */
export const se_CheckDomainAvailabilityCommand = async (
  input: CheckDomainAvailabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CheckDomainAvailability");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CheckDomainTransferabilityCommand
 */
export const se_CheckDomainTransferabilityCommand = async (
  input: CheckDomainTransferabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CheckDomainTransferability");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDomainCommand
 */
export const se_DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTagsForDomainCommand
 */
export const se_DeleteTagsForDomainCommand = async (
  input: DeleteTagsForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTagsForDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableDomainAutoRenewCommand
 */
export const se_DisableDomainAutoRenewCommand = async (
  input: DisableDomainAutoRenewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableDomainAutoRenew");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableDomainTransferLockCommand
 */
export const se_DisableDomainTransferLockCommand = async (
  input: DisableDomainTransferLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableDomainTransferLock");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateDelegationSignerFromDomainCommand
 */
export const se_DisassociateDelegationSignerFromDomainCommand = async (
  input: DisassociateDelegationSignerFromDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateDelegationSignerFromDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableDomainAutoRenewCommand
 */
export const se_EnableDomainAutoRenewCommand = async (
  input: EnableDomainAutoRenewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableDomainAutoRenew");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableDomainTransferLockCommand
 */
export const se_EnableDomainTransferLockCommand = async (
  input: EnableDomainTransferLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableDomainTransferLock");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContactReachabilityStatusCommand
 */
export const se_GetContactReachabilityStatusCommand = async (
  input: GetContactReachabilityStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetContactReachabilityStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDomainDetailCommand
 */
export const se_GetDomainDetailCommand = async (
  input: GetDomainDetailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDomainDetail");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDomainSuggestionsCommand
 */
export const se_GetDomainSuggestionsCommand = async (
  input: GetDomainSuggestionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDomainSuggestions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOperationDetailCommand
 */
export const se_GetOperationDetailCommand = async (
  input: GetOperationDetailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOperationDetail");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDomainsCommand
 */
export const se_ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDomains");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOperationsCommand
 */
export const se_ListOperationsCommand = async (
  input: ListOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListOperations");
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
  const headers: __HeaderBag = sharedHeaders("ListPrices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForDomainCommand
 */
export const se_ListTagsForDomainCommand = async (
  input: ListTagsForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PushDomainCommand
 */
export const se_PushDomainCommand = async (
  input: PushDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PushDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterDomainCommand
 */
export const se_RegisterDomainCommand = async (
  input: RegisterDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommand
 */
export const se_RejectDomainTransferFromAnotherAwsAccountCommand = async (
  input: RejectDomainTransferFromAnotherAwsAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RejectDomainTransferFromAnotherAwsAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RenewDomainCommand
 */
export const se_RenewDomainCommand = async (
  input: RenewDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RenewDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResendContactReachabilityEmailCommand
 */
export const se_ResendContactReachabilityEmailCommand = async (
  input: ResendContactReachabilityEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResendContactReachabilityEmail");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResendOperationAuthorizationCommand
 */
export const se_ResendOperationAuthorizationCommand = async (
  input: ResendOperationAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResendOperationAuthorization");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RetrieveDomainAuthCodeCommand
 */
export const se_RetrieveDomainAuthCodeCommand = async (
  input: RetrieveDomainAuthCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RetrieveDomainAuthCode");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TransferDomainCommand
 */
export const se_TransferDomainCommand = async (
  input: TransferDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TransferDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TransferDomainToAnotherAwsAccountCommand
 */
export const se_TransferDomainToAnotherAwsAccountCommand = async (
  input: TransferDomainToAnotherAwsAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TransferDomainToAnotherAwsAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDomainContactCommand
 */
export const se_UpdateDomainContactCommand = async (
  input: UpdateDomainContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDomainContact");
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
  const headers: __HeaderBag = sharedHeaders("UpdateDomainContactPrivacy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDomainNameserversCommand
 */
export const se_UpdateDomainNameserversCommand = async (
  input: UpdateDomainNameserversCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDomainNameservers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTagsForDomainCommand
 */
export const se_UpdateTagsForDomainCommand = async (
  input: UpdateTagsForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTagsForDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ViewBillingCommand
 */
export const se_ViewBillingCommand = async (
  input: ViewBillingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ViewBilling");
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
  contents = _json(data);
  const response: AcceptDomainTransferFromAnotherAwsAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateDelegationSignerToDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CancelDomainTransferToAnotherAwsAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CheckDomainAvailabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CheckDomainTransferabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteTagsForDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisableDomainAutoRenewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisableDomainTransferLockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateDelegationSignerFromDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: EnableDomainAutoRenewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: EnableDomainTransferLockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetContactReachabilityStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetDomainSuggestionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RegisterDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RejectDomainTransferFromAnotherAwsAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RenewDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ResendContactReachabilityEmailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RetrieveDomainAuthCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TransferDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TransferDomainToAnotherAwsAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateDomainContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateDomainContactPrivacyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateDomainNameserversCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateTagsForDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DnssecLimitExceededRes
 */
const de_DnssecLimitExceededRes = async (parsedOutput: any, context: __SerdeContext): Promise<DnssecLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UnsupportedTLD({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AcceptDomainTransferFromAnotherAwsAccountRequest omitted.

// se_AssociateDelegationSignerToDomainRequest omitted.

// se_CancelDomainTransferToAnotherAwsAccountRequest omitted.

// se_CheckDomainAvailabilityRequest omitted.

// se_CheckDomainTransferabilityRequest omitted.

/**
 * serializeAws_json1_1Consent
 */
const se_Consent = (input: Consent, context: __SerdeContext): any => {
  return take(input, {
    Currency: [],
    MaxPrice: __serializeFloat,
  });
};

// se_ContactDetail omitted.

// se_DeleteDomainRequest omitted.

// se_DeleteTagsForDomainRequest omitted.

// se_DisableDomainAutoRenewRequest omitted.

// se_DisableDomainTransferLockRequest omitted.

// se_DisassociateDelegationSignerFromDomainRequest omitted.

// se_DnssecSigningAttributes omitted.

// se_EnableDomainAutoRenewRequest omitted.

// se_EnableDomainTransferLockRequest omitted.

// se_ExtraParam omitted.

// se_ExtraParamList omitted.

// se_FilterCondition omitted.

// se_FilterConditions omitted.

// se_GetContactReachabilityStatusRequest omitted.

// se_GetDomainDetailRequest omitted.

// se_GetDomainSuggestionsRequest omitted.

// se_GetOperationDetailRequest omitted.

// se_GlueIpList omitted.

// se_ListDomainsRequest omitted.

/**
 * serializeAws_json1_1ListOperationsRequest
 */
const se_ListOperationsRequest = (input: ListOperationsRequest, context: __SerdeContext): any => {
  return take(input, {
    Marker: [],
    MaxItems: [],
    SortBy: [],
    SortOrder: [],
    Status: _json,
    SubmittedSince: (_) => Math.round(_.getTime() / 1000),
    Type: _json,
  });
};

// se_ListPricesRequest omitted.

// se_ListTagsForDomainRequest omitted.

// se_Nameserver omitted.

// se_NameserverList omitted.

// se_OperationStatusList omitted.

// se_OperationTypeList omitted.

// se_PushDomainRequest omitted.

// se_RegisterDomainRequest omitted.

// se_RejectDomainTransferFromAnotherAwsAccountRequest omitted.

// se_RenewDomainRequest omitted.

// se_ResendContactReachabilityEmailRequest omitted.

// se_ResendOperationAuthorizationRequest omitted.

// se_RetrieveDomainAuthCodeRequest omitted.

// se_SortCondition omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TransferDomainRequest omitted.

// se_TransferDomainToAnotherAwsAccountRequest omitted.

// se_UpdateDomainContactPrivacyRequest omitted.

/**
 * serializeAws_json1_1UpdateDomainContactRequest
 */
const se_UpdateDomainContactRequest = (input: UpdateDomainContactRequest, context: __SerdeContext): any => {
  return take(input, {
    AdminContact: _json,
    Consent: (_) => se_Consent(_, context),
    DomainName: [],
    RegistrantContact: _json,
    TechContact: _json,
  });
};

// se_UpdateDomainNameserversRequest omitted.

// se_UpdateTagsForDomainRequest omitted.

// se_Values omitted.

/**
 * serializeAws_json1_1ViewBillingRequest
 */
const se_ViewBillingRequest = (input: ViewBillingRequest, context: __SerdeContext): any => {
  return take(input, {
    End: (_) => Math.round(_.getTime() / 1000),
    Marker: [],
    MaxItems: [],
    Start: (_) => Math.round(_.getTime() / 1000),
  });
};

// de_AcceptDomainTransferFromAnotherAwsAccountResponse omitted.

// de_AssociateDelegationSignerToDomainResponse omitted.

/**
 * deserializeAws_json1_1BillingRecord
 */
const de_BillingRecord = (output: any, context: __SerdeContext): BillingRecord => {
  return take(output, {
    BillDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainName: __expectString,
    InvoiceId: __expectString,
    Operation: __expectString,
    Price: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1BillingRecords
 */
const de_BillingRecords = (output: any, context: __SerdeContext): BillingRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BillingRecord(entry, context);
    });
  return retVal;
};

// de_CancelDomainTransferToAnotherAwsAccountResponse omitted.

// de_CheckDomainAvailabilityResponse omitted.

// de_CheckDomainTransferabilityResponse omitted.

// de_ContactDetail omitted.

// de_DeleteDomainResponse omitted.

// de_DeleteTagsForDomainResponse omitted.

// de_DisableDomainAutoRenewResponse omitted.

// de_DisableDomainTransferLockResponse omitted.

// de_DisassociateDelegationSignerFromDomainResponse omitted.

// de_DnssecKey omitted.

// de_DnssecKeyList omitted.

// de_DnssecLimitExceeded omitted.

// de_DomainLimitExceeded omitted.

/**
 * deserializeAws_json1_1DomainPrice
 */
const de_DomainPrice = (output: any, context: __SerdeContext): DomainPrice => {
  return take(output, {
    ChangeOwnershipPrice: (_: any) => de_PriceWithCurrency(_, context),
    Name: __expectString,
    RegistrationPrice: (_: any) => de_PriceWithCurrency(_, context),
    RenewalPrice: (_: any) => de_PriceWithCurrency(_, context),
    RestorationPrice: (_: any) => de_PriceWithCurrency(_, context),
    TransferPrice: (_: any) => de_PriceWithCurrency(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DomainPriceList
 */
const de_DomainPriceList = (output: any, context: __SerdeContext): DomainPrice[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainPrice(entry, context);
    });
  return retVal;
};

// de_DomainStatusList omitted.

// de_DomainSuggestion omitted.

// de_DomainSuggestionsList omitted.

/**
 * deserializeAws_json1_1DomainSummary
 */
const de_DomainSummary = (output: any, context: __SerdeContext): DomainSummary => {
  return take(output, {
    AutoRenew: __expectBoolean,
    DomainName: __expectString,
    Expiry: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TransferLock: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1DomainSummaryList
 */
const de_DomainSummaryList = (output: any, context: __SerdeContext): DomainSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainSummary(entry, context);
    });
  return retVal;
};

// de_DomainTransferability omitted.

// de_DuplicateRequest omitted.

// de_EnableDomainAutoRenewResponse omitted.

// de_EnableDomainTransferLockResponse omitted.

// de_ExtraParam omitted.

// de_ExtraParamList omitted.

// de_GetContactReachabilityStatusResponse omitted.

/**
 * deserializeAws_json1_1GetDomainDetailResponse
 */
const de_GetDomainDetailResponse = (output: any, context: __SerdeContext): GetDomainDetailResponse => {
  return take(output, {
    AbuseContactEmail: __expectString,
    AbuseContactPhone: __expectString,
    AdminContact: _json,
    AdminPrivacy: __expectBoolean,
    AutoRenew: __expectBoolean,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DnsSec: __expectString,
    DnssecKeys: _json,
    DomainName: __expectString,
    ExpirationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Nameservers: _json,
    RegistrantContact: _json,
    RegistrantPrivacy: __expectBoolean,
    RegistrarName: __expectString,
    RegistrarUrl: __expectString,
    RegistryDomainId: __expectString,
    Reseller: __expectString,
    StatusList: _json,
    TechContact: _json,
    TechPrivacy: __expectBoolean,
    UpdatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    WhoIsServer: __expectString,
  }) as any;
};

// de_GetDomainSuggestionsResponse omitted.

/**
 * deserializeAws_json1_1GetOperationDetailResponse
 */
const de_GetOperationDetailResponse = (output: any, context: __SerdeContext): GetOperationDetailResponse => {
  return take(output, {
    DomainName: __expectString,
    LastUpdatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    OperationId: __expectString,
    Status: __expectString,
    StatusFlag: __expectString,
    SubmittedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Type: __expectString,
  }) as any;
};

// de_GlueIpList omitted.

// de_InvalidInput omitted.

/**
 * deserializeAws_json1_1ListDomainsResponse
 */
const de_ListDomainsResponse = (output: any, context: __SerdeContext): ListDomainsResponse => {
  return take(output, {
    Domains: (_: any) => de_DomainSummaryList(_, context),
    NextPageMarker: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListOperationsResponse
 */
const de_ListOperationsResponse = (output: any, context: __SerdeContext): ListOperationsResponse => {
  return take(output, {
    NextPageMarker: __expectString,
    Operations: (_: any) => de_OperationSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListPricesResponse
 */
const de_ListPricesResponse = (output: any, context: __SerdeContext): ListPricesResponse => {
  return take(output, {
    NextPageMarker: __expectString,
    Prices: (_: any) => de_DomainPriceList(_, context),
  }) as any;
};

// de_ListTagsForDomainResponse omitted.

// de_Nameserver omitted.

// de_NameserverList omitted.

// de_OperationLimitExceeded omitted.

/**
 * deserializeAws_json1_1OperationSummary
 */
const de_OperationSummary = (output: any, context: __SerdeContext): OperationSummary => {
  return take(output, {
    DomainName: __expectString,
    LastUpdatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    OperationId: __expectString,
    Status: __expectString,
    StatusFlag: __expectString,
    SubmittedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1OperationSummaryList
 */
const de_OperationSummaryList = (output: any, context: __SerdeContext): OperationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OperationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PriceWithCurrency
 */
const de_PriceWithCurrency = (output: any, context: __SerdeContext): PriceWithCurrency => {
  return take(output, {
    Currency: __expectString,
    Price: __limitedParseDouble,
  }) as any;
};

// de_RegisterDomainResponse omitted.

// de_RejectDomainTransferFromAnotherAwsAccountResponse omitted.

// de_RenewDomainResponse omitted.

// de_ResendContactReachabilityEmailResponse omitted.

// de_RetrieveDomainAuthCodeResponse omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TLDRulesViolation omitted.

// de_TransferDomainResponse omitted.

// de_TransferDomainToAnotherAwsAccountResponse omitted.

// de_UnsupportedTLD omitted.

// de_UpdateDomainContactPrivacyResponse omitted.

// de_UpdateDomainContactResponse omitted.

// de_UpdateDomainNameserversResponse omitted.

// de_UpdateTagsForDomainResponse omitted.

/**
 * deserializeAws_json1_1ViewBillingResponse
 */
const de_ViewBillingResponse = (output: any, context: __SerdeContext): ViewBillingResponse => {
  return take(output, {
    BillingRecords: (_: any) => de_BillingRecords(_, context),
    NextPageMarker: __expectString,
  }) as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `Route53Domains_v20140515.${operation}`,
  };
}

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
