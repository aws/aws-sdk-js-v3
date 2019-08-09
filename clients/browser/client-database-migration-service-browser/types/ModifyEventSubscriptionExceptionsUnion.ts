import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { SNSInvalidTopicFault } from "./SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "./SNSNoAuthorizationFault";
import { KMSAccessDeniedFault } from "./KMSAccessDeniedFault";
import { KMSDisabledFault } from "./KMSDisabledFault";
import { KMSInvalidStateFault } from "./KMSInvalidStateFault";
import { KMSNotFoundFault } from "./KMSNotFoundFault";
import { KMSThrottlingFault } from "./KMSThrottlingFault";
export type ModifyEventSubscriptionExceptionsUnion =
  | ResourceQuotaExceededFault
  | ResourceNotFoundFault
  | SNSInvalidTopicFault
  | SNSNoAuthorizationFault
  | KMSAccessDeniedFault
  | KMSDisabledFault
  | KMSInvalidStateFault
  | KMSNotFoundFault
  | KMSThrottlingFault;
