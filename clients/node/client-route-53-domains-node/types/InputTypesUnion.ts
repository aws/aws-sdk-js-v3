import { CheckDomainAvailabilityInput } from "./CheckDomainAvailabilityInput";
import { CheckDomainTransferabilityInput } from "./CheckDomainTransferabilityInput";
import { DeleteTagsForDomainInput } from "./DeleteTagsForDomainInput";
import { DisableDomainAutoRenewInput } from "./DisableDomainAutoRenewInput";
import { DisableDomainTransferLockInput } from "./DisableDomainTransferLockInput";
import { EnableDomainAutoRenewInput } from "./EnableDomainAutoRenewInput";
import { EnableDomainTransferLockInput } from "./EnableDomainTransferLockInput";
import { GetContactReachabilityStatusInput } from "./GetContactReachabilityStatusInput";
import { GetDomainDetailInput } from "./GetDomainDetailInput";
import { GetDomainSuggestionsInput } from "./GetDomainSuggestionsInput";
import { GetOperationDetailInput } from "./GetOperationDetailInput";
import { ListDomainsInput } from "./ListDomainsInput";
import { ListOperationsInput } from "./ListOperationsInput";
import { ListTagsForDomainInput } from "./ListTagsForDomainInput";
import { RegisterDomainInput } from "./RegisterDomainInput";
import { RenewDomainInput } from "./RenewDomainInput";
import { ResendContactReachabilityEmailInput } from "./ResendContactReachabilityEmailInput";
import { RetrieveDomainAuthCodeInput } from "./RetrieveDomainAuthCodeInput";
import { TransferDomainInput } from "./TransferDomainInput";
import { UpdateDomainContactInput } from "./UpdateDomainContactInput";
import { UpdateDomainContactPrivacyInput } from "./UpdateDomainContactPrivacyInput";
import { UpdateDomainNameserversInput } from "./UpdateDomainNameserversInput";
import { UpdateTagsForDomainInput } from "./UpdateTagsForDomainInput";
import { ViewBillingInput } from "./ViewBillingInput";
export type InputTypesUnion =
  | CheckDomainAvailabilityInput
  | CheckDomainTransferabilityInput
  | DeleteTagsForDomainInput
  | DisableDomainAutoRenewInput
  | DisableDomainTransferLockInput
  | EnableDomainAutoRenewInput
  | EnableDomainTransferLockInput
  | GetContactReachabilityStatusInput
  | GetDomainDetailInput
  | GetDomainSuggestionsInput
  | GetOperationDetailInput
  | ListDomainsInput
  | ListOperationsInput
  | ListTagsForDomainInput
  | RegisterDomainInput
  | RenewDomainInput
  | ResendContactReachabilityEmailInput
  | RetrieveDomainAuthCodeInput
  | TransferDomainInput
  | UpdateDomainContactInput
  | UpdateDomainContactPrivacyInput
  | UpdateDomainNameserversInput
  | UpdateTagsForDomainInput
  | ViewBillingInput;
