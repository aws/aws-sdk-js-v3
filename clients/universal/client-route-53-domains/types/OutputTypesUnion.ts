import { CheckDomainAvailabilityOutput } from "./CheckDomainAvailabilityOutput";
import { CheckDomainTransferabilityOutput } from "./CheckDomainTransferabilityOutput";
import { DeleteTagsForDomainOutput } from "./DeleteTagsForDomainOutput";
import { DisableDomainAutoRenewOutput } from "./DisableDomainAutoRenewOutput";
import { DisableDomainTransferLockOutput } from "./DisableDomainTransferLockOutput";
import { EnableDomainAutoRenewOutput } from "./EnableDomainAutoRenewOutput";
import { EnableDomainTransferLockOutput } from "./EnableDomainTransferLockOutput";
import { GetContactReachabilityStatusOutput } from "./GetContactReachabilityStatusOutput";
import { GetDomainDetailOutput } from "./GetDomainDetailOutput";
import { GetDomainSuggestionsOutput } from "./GetDomainSuggestionsOutput";
import { GetOperationDetailOutput } from "./GetOperationDetailOutput";
import { ListDomainsOutput } from "./ListDomainsOutput";
import { ListOperationsOutput } from "./ListOperationsOutput";
import { ListTagsForDomainOutput } from "./ListTagsForDomainOutput";
import { RegisterDomainOutput } from "./RegisterDomainOutput";
import { RenewDomainOutput } from "./RenewDomainOutput";
import { ResendContactReachabilityEmailOutput } from "./ResendContactReachabilityEmailOutput";
import { RetrieveDomainAuthCodeOutput } from "./RetrieveDomainAuthCodeOutput";
import { TransferDomainOutput } from "./TransferDomainOutput";
import { UpdateDomainContactOutput } from "./UpdateDomainContactOutput";
import { UpdateDomainContactPrivacyOutput } from "./UpdateDomainContactPrivacyOutput";
import { UpdateDomainNameserversOutput } from "./UpdateDomainNameserversOutput";
import { UpdateTagsForDomainOutput } from "./UpdateTagsForDomainOutput";
import { ViewBillingOutput } from "./ViewBillingOutput";
export type OutputTypesUnion =
  | CheckDomainAvailabilityOutput
  | CheckDomainTransferabilityOutput
  | DeleteTagsForDomainOutput
  | DisableDomainAutoRenewOutput
  | DisableDomainTransferLockOutput
  | EnableDomainAutoRenewOutput
  | EnableDomainTransferLockOutput
  | GetContactReachabilityStatusOutput
  | GetDomainDetailOutput
  | GetDomainSuggestionsOutput
  | GetOperationDetailOutput
  | ListDomainsOutput
  | ListOperationsOutput
  | ListTagsForDomainOutput
  | RegisterDomainOutput
  | RenewDomainOutput
  | ResendContactReachabilityEmailOutput
  | RetrieveDomainAuthCodeOutput
  | TransferDomainOutput
  | UpdateDomainContactOutput
  | UpdateDomainContactPrivacyOutput
  | UpdateDomainNameserversOutput
  | UpdateTagsForDomainOutput
  | ViewBillingOutput;
