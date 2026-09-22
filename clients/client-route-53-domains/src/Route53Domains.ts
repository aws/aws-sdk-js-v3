// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AcceptDomainTransferFromAnotherAwsAccountCommandInput,
  type AcceptDomainTransferFromAnotherAwsAccountCommandOutput,
  AcceptDomainTransferFromAnotherAwsAccountCommand,
} from "./commands/AcceptDomainTransferFromAnotherAwsAccountCommand";
import {
  type AssociateDelegationSignerToDomainCommandInput,
  type AssociateDelegationSignerToDomainCommandOutput,
  AssociateDelegationSignerToDomainCommand,
} from "./commands/AssociateDelegationSignerToDomainCommand";
import {
  type CancelDomainTransferToAnotherAwsAccountCommandInput,
  type CancelDomainTransferToAnotherAwsAccountCommandOutput,
  CancelDomainTransferToAnotherAwsAccountCommand,
} from "./commands/CancelDomainTransferToAnotherAwsAccountCommand";
import {
  type CheckDomainAvailabilityCommandInput,
  type CheckDomainAvailabilityCommandOutput,
  CheckDomainAvailabilityCommand,
} from "./commands/CheckDomainAvailabilityCommand";
import {
  type CheckDomainTransferabilityCommandInput,
  type CheckDomainTransferabilityCommandOutput,
  CheckDomainTransferabilityCommand,
} from "./commands/CheckDomainTransferabilityCommand";
import {
  type DeleteDomainCommandInput,
  type DeleteDomainCommandOutput,
  DeleteDomainCommand,
} from "./commands/DeleteDomainCommand";
import {
  type DeleteTagsForDomainCommandInput,
  type DeleteTagsForDomainCommandOutput,
  DeleteTagsForDomainCommand,
} from "./commands/DeleteTagsForDomainCommand";
import {
  type DisableDomainAutoRenewCommandInput,
  type DisableDomainAutoRenewCommandOutput,
  DisableDomainAutoRenewCommand,
} from "./commands/DisableDomainAutoRenewCommand";
import {
  type DisableDomainTransferLockCommandInput,
  type DisableDomainTransferLockCommandOutput,
  DisableDomainTransferLockCommand,
} from "./commands/DisableDomainTransferLockCommand";
import {
  type DisassociateDelegationSignerFromDomainCommandInput,
  type DisassociateDelegationSignerFromDomainCommandOutput,
  DisassociateDelegationSignerFromDomainCommand,
} from "./commands/DisassociateDelegationSignerFromDomainCommand";
import {
  type EnableDomainAutoRenewCommandInput,
  type EnableDomainAutoRenewCommandOutput,
  EnableDomainAutoRenewCommand,
} from "./commands/EnableDomainAutoRenewCommand";
import {
  type EnableDomainTransferLockCommandInput,
  type EnableDomainTransferLockCommandOutput,
  EnableDomainTransferLockCommand,
} from "./commands/EnableDomainTransferLockCommand";
import {
  type GetContactReachabilityStatusCommandInput,
  type GetContactReachabilityStatusCommandOutput,
  GetContactReachabilityStatusCommand,
} from "./commands/GetContactReachabilityStatusCommand";
import {
  type GetDomainDetailCommandInput,
  type GetDomainDetailCommandOutput,
  GetDomainDetailCommand,
} from "./commands/GetDomainDetailCommand";
import {
  type GetDomainSuggestionsCommandInput,
  type GetDomainSuggestionsCommandOutput,
  GetDomainSuggestionsCommand,
} from "./commands/GetDomainSuggestionsCommand";
import {
  type GetOperationDetailCommandInput,
  type GetOperationDetailCommandOutput,
  GetOperationDetailCommand,
} from "./commands/GetOperationDetailCommand";
import {
  type ListDomainsCommandInput,
  type ListDomainsCommandOutput,
  ListDomainsCommand,
} from "./commands/ListDomainsCommand";
import {
  type ListOperationsCommandInput,
  type ListOperationsCommandOutput,
  ListOperationsCommand,
} from "./commands/ListOperationsCommand";
import {
  type ListPricesCommandInput,
  type ListPricesCommandOutput,
  ListPricesCommand,
} from "./commands/ListPricesCommand";
import {
  type ListTagsForDomainCommandInput,
  type ListTagsForDomainCommandOutput,
  ListTagsForDomainCommand,
} from "./commands/ListTagsForDomainCommand";
import {
  type PushDomainCommandInput,
  type PushDomainCommandOutput,
  PushDomainCommand,
} from "./commands/PushDomainCommand";
import {
  type RegisterDomainCommandInput,
  type RegisterDomainCommandOutput,
  RegisterDomainCommand,
} from "./commands/RegisterDomainCommand";
import {
  type RejectDomainTransferFromAnotherAwsAccountCommandInput,
  type RejectDomainTransferFromAnotherAwsAccountCommandOutput,
  RejectDomainTransferFromAnotherAwsAccountCommand,
} from "./commands/RejectDomainTransferFromAnotherAwsAccountCommand";
import {
  type RenewDomainCommandInput,
  type RenewDomainCommandOutput,
  RenewDomainCommand,
} from "./commands/RenewDomainCommand";
import {
  type ResendContactReachabilityEmailCommandInput,
  type ResendContactReachabilityEmailCommandOutput,
  ResendContactReachabilityEmailCommand,
} from "./commands/ResendContactReachabilityEmailCommand";
import {
  type ResendOperationAuthorizationCommandInput,
  type ResendOperationAuthorizationCommandOutput,
  ResendOperationAuthorizationCommand,
} from "./commands/ResendOperationAuthorizationCommand";
import {
  type RetrieveDomainAuthCodeCommandInput,
  type RetrieveDomainAuthCodeCommandOutput,
  RetrieveDomainAuthCodeCommand,
} from "./commands/RetrieveDomainAuthCodeCommand";
import {
  type TransferDomainCommandInput,
  type TransferDomainCommandOutput,
  TransferDomainCommand,
} from "./commands/TransferDomainCommand";
import {
  type TransferDomainToAnotherAwsAccountCommandInput,
  type TransferDomainToAnotherAwsAccountCommandOutput,
  TransferDomainToAnotherAwsAccountCommand,
} from "./commands/TransferDomainToAnotherAwsAccountCommand";
import {
  type UpdateDomainContactCommandInput,
  type UpdateDomainContactCommandOutput,
  UpdateDomainContactCommand,
} from "./commands/UpdateDomainContactCommand";
import {
  type UpdateDomainContactPrivacyCommandInput,
  type UpdateDomainContactPrivacyCommandOutput,
  UpdateDomainContactPrivacyCommand,
} from "./commands/UpdateDomainContactPrivacyCommand";
import {
  type UpdateDomainNameserversCommandInput,
  type UpdateDomainNameserversCommandOutput,
  UpdateDomainNameserversCommand,
} from "./commands/UpdateDomainNameserversCommand";
import {
  type UpdateTagsForDomainCommandInput,
  type UpdateTagsForDomainCommandOutput,
  UpdateTagsForDomainCommand,
} from "./commands/UpdateTagsForDomainCommand";
import {
  type ViewBillingCommandInput,
  type ViewBillingCommandOutput,
  ViewBillingCommand,
} from "./commands/ViewBillingCommand";
import { paginateListDomains } from "./pagination/ListDomainsPaginator";
import { paginateListOperations } from "./pagination/ListOperationsPaginator";
import { paginateListPrices } from "./pagination/ListPricesPaginator";
import { paginateViewBilling } from "./pagination/ViewBillingPaginator";
import { Route53DomainsClient } from "./Route53DomainsClient";

const commands = {
  AcceptDomainTransferFromAnotherAwsAccountCommand,
  AssociateDelegationSignerToDomainCommand,
  CancelDomainTransferToAnotherAwsAccountCommand,
  CheckDomainAvailabilityCommand,
  CheckDomainTransferabilityCommand,
  DeleteDomainCommand,
  DeleteTagsForDomainCommand,
  DisableDomainAutoRenewCommand,
  DisableDomainTransferLockCommand,
  DisassociateDelegationSignerFromDomainCommand,
  EnableDomainAutoRenewCommand,
  EnableDomainTransferLockCommand,
  GetContactReachabilityStatusCommand,
  GetDomainDetailCommand,
  GetDomainSuggestionsCommand,
  GetOperationDetailCommand,
  ListDomainsCommand,
  ListOperationsCommand,
  ListPricesCommand,
  ListTagsForDomainCommand,
  PushDomainCommand,
  RegisterDomainCommand,
  RejectDomainTransferFromAnotherAwsAccountCommand,
  RenewDomainCommand,
  ResendContactReachabilityEmailCommand,
  ResendOperationAuthorizationCommand,
  RetrieveDomainAuthCodeCommand,
  TransferDomainCommand,
  TransferDomainToAnotherAwsAccountCommand,
  UpdateDomainContactCommand,
  UpdateDomainContactPrivacyCommand,
  UpdateDomainNameserversCommand,
  UpdateTagsForDomainCommand,
  ViewBillingCommand,
};
const paginators = {
  paginateListDomains,
  paginateListOperations,
  paginateListPrices,
  paginateViewBilling,
};

/**
 * @public
 */
export interface Route53DomainsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Route53Domains {
  /**
   * @see {@link AcceptDomainTransferFromAnotherAwsAccountCommand}
   */
  acceptDomainTransferFromAnotherAwsAccount(
    args: AcceptDomainTransferFromAnotherAwsAccountCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<AcceptDomainTransferFromAnotherAwsAccountCommandOutput>;
  acceptDomainTransferFromAnotherAwsAccount(
    args: AcceptDomainTransferFromAnotherAwsAccountCommandInput,
    cb: (err: any, data?: AcceptDomainTransferFromAnotherAwsAccountCommandOutput) => void
  ): void;
  acceptDomainTransferFromAnotherAwsAccount(
    args: AcceptDomainTransferFromAnotherAwsAccountCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: AcceptDomainTransferFromAnotherAwsAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateDelegationSignerToDomainCommand}
   */
  associateDelegationSignerToDomain(
    args: AssociateDelegationSignerToDomainCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<AssociateDelegationSignerToDomainCommandOutput>;
  associateDelegationSignerToDomain(
    args: AssociateDelegationSignerToDomainCommandInput,
    cb: (err: any, data?: AssociateDelegationSignerToDomainCommandOutput) => void
  ): void;
  associateDelegationSignerToDomain(
    args: AssociateDelegationSignerToDomainCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: AssociateDelegationSignerToDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelDomainTransferToAnotherAwsAccountCommand}
   */
  cancelDomainTransferToAnotherAwsAccount(
    args: CancelDomainTransferToAnotherAwsAccountCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<CancelDomainTransferToAnotherAwsAccountCommandOutput>;
  cancelDomainTransferToAnotherAwsAccount(
    args: CancelDomainTransferToAnotherAwsAccountCommandInput,
    cb: (err: any, data?: CancelDomainTransferToAnotherAwsAccountCommandOutput) => void
  ): void;
  cancelDomainTransferToAnotherAwsAccount(
    args: CancelDomainTransferToAnotherAwsAccountCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: CancelDomainTransferToAnotherAwsAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link CheckDomainAvailabilityCommand}
   */
  checkDomainAvailability(
    args: CheckDomainAvailabilityCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<CheckDomainAvailabilityCommandOutput>;
  checkDomainAvailability(
    args: CheckDomainAvailabilityCommandInput,
    cb: (err: any, data?: CheckDomainAvailabilityCommandOutput) => void
  ): void;
  checkDomainAvailability(
    args: CheckDomainAvailabilityCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: CheckDomainAvailabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link CheckDomainTransferabilityCommand}
   */
  checkDomainTransferability(
    args: CheckDomainTransferabilityCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<CheckDomainTransferabilityCommandOutput>;
  checkDomainTransferability(
    args: CheckDomainTransferabilityCommandInput,
    cb: (err: any, data?: CheckDomainTransferabilityCommandOutput) => void
  ): void;
  checkDomainTransferability(
    args: CheckDomainTransferabilityCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: CheckDomainTransferabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainCommand}
   */
  deleteDomain(
    args: DeleteDomainCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<DeleteDomainCommandOutput>;
  deleteDomain(
    args: DeleteDomainCommandInput,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;
  deleteDomain(
    args: DeleteDomainCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTagsForDomainCommand}
   */
  deleteTagsForDomain(
    args: DeleteTagsForDomainCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<DeleteTagsForDomainCommandOutput>;
  deleteTagsForDomain(
    args: DeleteTagsForDomainCommandInput,
    cb: (err: any, data?: DeleteTagsForDomainCommandOutput) => void
  ): void;
  deleteTagsForDomain(
    args: DeleteTagsForDomainCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: DeleteTagsForDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableDomainAutoRenewCommand}
   */
  disableDomainAutoRenew(
    args: DisableDomainAutoRenewCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<DisableDomainAutoRenewCommandOutput>;
  disableDomainAutoRenew(
    args: DisableDomainAutoRenewCommandInput,
    cb: (err: any, data?: DisableDomainAutoRenewCommandOutput) => void
  ): void;
  disableDomainAutoRenew(
    args: DisableDomainAutoRenewCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: DisableDomainAutoRenewCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableDomainTransferLockCommand}
   */
  disableDomainTransferLock(
    args: DisableDomainTransferLockCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<DisableDomainTransferLockCommandOutput>;
  disableDomainTransferLock(
    args: DisableDomainTransferLockCommandInput,
    cb: (err: any, data?: DisableDomainTransferLockCommandOutput) => void
  ): void;
  disableDomainTransferLock(
    args: DisableDomainTransferLockCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: DisableDomainTransferLockCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateDelegationSignerFromDomainCommand}
   */
  disassociateDelegationSignerFromDomain(
    args: DisassociateDelegationSignerFromDomainCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<DisassociateDelegationSignerFromDomainCommandOutput>;
  disassociateDelegationSignerFromDomain(
    args: DisassociateDelegationSignerFromDomainCommandInput,
    cb: (err: any, data?: DisassociateDelegationSignerFromDomainCommandOutput) => void
  ): void;
  disassociateDelegationSignerFromDomain(
    args: DisassociateDelegationSignerFromDomainCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: DisassociateDelegationSignerFromDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableDomainAutoRenewCommand}
   */
  enableDomainAutoRenew(
    args: EnableDomainAutoRenewCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<EnableDomainAutoRenewCommandOutput>;
  enableDomainAutoRenew(
    args: EnableDomainAutoRenewCommandInput,
    cb: (err: any, data?: EnableDomainAutoRenewCommandOutput) => void
  ): void;
  enableDomainAutoRenew(
    args: EnableDomainAutoRenewCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: EnableDomainAutoRenewCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableDomainTransferLockCommand}
   */
  enableDomainTransferLock(
    args: EnableDomainTransferLockCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<EnableDomainTransferLockCommandOutput>;
  enableDomainTransferLock(
    args: EnableDomainTransferLockCommandInput,
    cb: (err: any, data?: EnableDomainTransferLockCommandOutput) => void
  ): void;
  enableDomainTransferLock(
    args: EnableDomainTransferLockCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: EnableDomainTransferLockCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContactReachabilityStatusCommand}
   */
  getContactReachabilityStatus(): Promise<GetContactReachabilityStatusCommandOutput>;
  getContactReachabilityStatus(
    args: GetContactReachabilityStatusCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<GetContactReachabilityStatusCommandOutput>;
  getContactReachabilityStatus(
    args: GetContactReachabilityStatusCommandInput,
    cb: (err: any, data?: GetContactReachabilityStatusCommandOutput) => void
  ): void;
  getContactReachabilityStatus(
    args: GetContactReachabilityStatusCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: GetContactReachabilityStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainDetailCommand}
   */
  getDomainDetail(
    args: GetDomainDetailCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<GetDomainDetailCommandOutput>;
  getDomainDetail(
    args: GetDomainDetailCommandInput,
    cb: (err: any, data?: GetDomainDetailCommandOutput) => void
  ): void;
  getDomainDetail(
    args: GetDomainDetailCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: GetDomainDetailCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainSuggestionsCommand}
   */
  getDomainSuggestions(
    args: GetDomainSuggestionsCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<GetDomainSuggestionsCommandOutput>;
  getDomainSuggestions(
    args: GetDomainSuggestionsCommandInput,
    cb: (err: any, data?: GetDomainSuggestionsCommandOutput) => void
  ): void;
  getDomainSuggestions(
    args: GetDomainSuggestionsCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: GetDomainSuggestionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOperationDetailCommand}
   */
  getOperationDetail(
    args: GetOperationDetailCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<GetOperationDetailCommandOutput>;
  getOperationDetail(
    args: GetOperationDetailCommandInput,
    cb: (err: any, data?: GetOperationDetailCommandOutput) => void
  ): void;
  getOperationDetail(
    args: GetOperationDetailCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: GetOperationDetailCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsCommand}
   */
  listDomains(): Promise<ListDomainsCommandOutput>;
  listDomains(
    args: ListDomainsCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<ListDomainsCommandOutput>;
  listDomains(
    args: ListDomainsCommandInput,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;
  listDomains(
    args: ListDomainsCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOperationsCommand}
   */
  listOperations(): Promise<ListOperationsCommandOutput>;
  listOperations(
    args: ListOperationsCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<ListOperationsCommandOutput>;
  listOperations(
    args: ListOperationsCommandInput,
    cb: (err: any, data?: ListOperationsCommandOutput) => void
  ): void;
  listOperations(
    args: ListOperationsCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: ListOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPricesCommand}
   */
  listPrices(): Promise<ListPricesCommandOutput>;
  listPrices(
    args: ListPricesCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<ListPricesCommandOutput>;
  listPrices(
    args: ListPricesCommandInput,
    cb: (err: any, data?: ListPricesCommandOutput) => void
  ): void;
  listPrices(
    args: ListPricesCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: ListPricesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForDomainCommand}
   */
  listTagsForDomain(
    args: ListTagsForDomainCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<ListTagsForDomainCommandOutput>;
  listTagsForDomain(
    args: ListTagsForDomainCommandInput,
    cb: (err: any, data?: ListTagsForDomainCommandOutput) => void
  ): void;
  listTagsForDomain(
    args: ListTagsForDomainCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: ListTagsForDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link PushDomainCommand}
   */
  pushDomain(
    args: PushDomainCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<PushDomainCommandOutput>;
  pushDomain(
    args: PushDomainCommandInput,
    cb: (err: any, data?: PushDomainCommandOutput) => void
  ): void;
  pushDomain(
    args: PushDomainCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: PushDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterDomainCommand}
   */
  registerDomain(
    args: RegisterDomainCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<RegisterDomainCommandOutput>;
  registerDomain(
    args: RegisterDomainCommandInput,
    cb: (err: any, data?: RegisterDomainCommandOutput) => void
  ): void;
  registerDomain(
    args: RegisterDomainCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: RegisterDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectDomainTransferFromAnotherAwsAccountCommand}
   */
  rejectDomainTransferFromAnotherAwsAccount(
    args: RejectDomainTransferFromAnotherAwsAccountCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<RejectDomainTransferFromAnotherAwsAccountCommandOutput>;
  rejectDomainTransferFromAnotherAwsAccount(
    args: RejectDomainTransferFromAnotherAwsAccountCommandInput,
    cb: (err: any, data?: RejectDomainTransferFromAnotherAwsAccountCommandOutput) => void
  ): void;
  rejectDomainTransferFromAnotherAwsAccount(
    args: RejectDomainTransferFromAnotherAwsAccountCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: RejectDomainTransferFromAnotherAwsAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link RenewDomainCommand}
   */
  renewDomain(
    args: RenewDomainCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<RenewDomainCommandOutput>;
  renewDomain(
    args: RenewDomainCommandInput,
    cb: (err: any, data?: RenewDomainCommandOutput) => void
  ): void;
  renewDomain(
    args: RenewDomainCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: RenewDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link ResendContactReachabilityEmailCommand}
   */
  resendContactReachabilityEmail(): Promise<ResendContactReachabilityEmailCommandOutput>;
  resendContactReachabilityEmail(
    args: ResendContactReachabilityEmailCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<ResendContactReachabilityEmailCommandOutput>;
  resendContactReachabilityEmail(
    args: ResendContactReachabilityEmailCommandInput,
    cb: (err: any, data?: ResendContactReachabilityEmailCommandOutput) => void
  ): void;
  resendContactReachabilityEmail(
    args: ResendContactReachabilityEmailCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: ResendContactReachabilityEmailCommandOutput) => void
  ): void;

  /**
   * @see {@link ResendOperationAuthorizationCommand}
   */
  resendOperationAuthorization(
    args: ResendOperationAuthorizationCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<ResendOperationAuthorizationCommandOutput>;
  resendOperationAuthorization(
    args: ResendOperationAuthorizationCommandInput,
    cb: (err: any, data?: ResendOperationAuthorizationCommandOutput) => void
  ): void;
  resendOperationAuthorization(
    args: ResendOperationAuthorizationCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: ResendOperationAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link RetrieveDomainAuthCodeCommand}
   */
  retrieveDomainAuthCode(
    args: RetrieveDomainAuthCodeCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<RetrieveDomainAuthCodeCommandOutput>;
  retrieveDomainAuthCode(
    args: RetrieveDomainAuthCodeCommandInput,
    cb: (err: any, data?: RetrieveDomainAuthCodeCommandOutput) => void
  ): void;
  retrieveDomainAuthCode(
    args: RetrieveDomainAuthCodeCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: RetrieveDomainAuthCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link TransferDomainCommand}
   */
  transferDomain(
    args: TransferDomainCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<TransferDomainCommandOutput>;
  transferDomain(
    args: TransferDomainCommandInput,
    cb: (err: any, data?: TransferDomainCommandOutput) => void
  ): void;
  transferDomain(
    args: TransferDomainCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: TransferDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link TransferDomainToAnotherAwsAccountCommand}
   */
  transferDomainToAnotherAwsAccount(
    args: TransferDomainToAnotherAwsAccountCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<TransferDomainToAnotherAwsAccountCommandOutput>;
  transferDomainToAnotherAwsAccount(
    args: TransferDomainToAnotherAwsAccountCommandInput,
    cb: (err: any, data?: TransferDomainToAnotherAwsAccountCommandOutput) => void
  ): void;
  transferDomainToAnotherAwsAccount(
    args: TransferDomainToAnotherAwsAccountCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: TransferDomainToAnotherAwsAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainContactCommand}
   */
  updateDomainContact(
    args: UpdateDomainContactCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<UpdateDomainContactCommandOutput>;
  updateDomainContact(
    args: UpdateDomainContactCommandInput,
    cb: (err: any, data?: UpdateDomainContactCommandOutput) => void
  ): void;
  updateDomainContact(
    args: UpdateDomainContactCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: UpdateDomainContactCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainContactPrivacyCommand}
   */
  updateDomainContactPrivacy(
    args: UpdateDomainContactPrivacyCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<UpdateDomainContactPrivacyCommandOutput>;
  updateDomainContactPrivacy(
    args: UpdateDomainContactPrivacyCommandInput,
    cb: (err: any, data?: UpdateDomainContactPrivacyCommandOutput) => void
  ): void;
  updateDomainContactPrivacy(
    args: UpdateDomainContactPrivacyCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: UpdateDomainContactPrivacyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainNameserversCommand}
   */
  updateDomainNameservers(
    args: UpdateDomainNameserversCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<UpdateDomainNameserversCommandOutput>;
  updateDomainNameservers(
    args: UpdateDomainNameserversCommandInput,
    cb: (err: any, data?: UpdateDomainNameserversCommandOutput) => void
  ): void;
  updateDomainNameservers(
    args: UpdateDomainNameserversCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: UpdateDomainNameserversCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTagsForDomainCommand}
   */
  updateTagsForDomain(
    args: UpdateTagsForDomainCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<UpdateTagsForDomainCommandOutput>;
  updateTagsForDomain(
    args: UpdateTagsForDomainCommandInput,
    cb: (err: any, data?: UpdateTagsForDomainCommandOutput) => void
  ): void;
  updateTagsForDomain(
    args: UpdateTagsForDomainCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: UpdateTagsForDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link ViewBillingCommand}
   */
  viewBilling(): Promise<ViewBillingCommandOutput>;
  viewBilling(
    args: ViewBillingCommandInput,
    options?: Route53DomainsRequestOptions
  ): Promise<ViewBillingCommandOutput>;
  viewBilling(
    args: ViewBillingCommandInput,
    cb: (err: any, data?: ViewBillingCommandOutput) => void
  ): void;
  viewBilling(
    args: ViewBillingCommandInput,
    options: Route53DomainsRequestOptions,
    cb: (err: any, data?: ViewBillingCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDomainsCommandOutput}.
   */
  paginateListDomains(
    args?: ListDomainsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDomainsCommandOutput>;

  /**
   * @see {@link ListOperationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOperationsCommandOutput}.
   */
  paginateListOperations(
    args?: ListOperationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOperationsCommandOutput>;

  /**
   * @see {@link ListPricesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPricesCommandOutput}.
   */
  paginateListPrices(
    args?: ListPricesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPricesCommandOutput>;

  /**
   * @see {@link ViewBillingCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ViewBillingCommandOutput}.
   */
  paginateViewBilling(
    args?: ViewBillingCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ViewBillingCommandOutput>;
}

/**
 * <p>Amazon Route 53 API actions let you register domain names and perform related
 * 			operations.</p>
 * @public
 */
export class Route53Domains extends Route53DomainsClient implements Route53Domains {}
createAggregatedClient(commands, Route53Domains, { paginators });
