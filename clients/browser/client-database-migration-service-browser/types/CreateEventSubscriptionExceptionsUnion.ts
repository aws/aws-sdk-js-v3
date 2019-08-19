import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { ResourceAlreadyExistsFault } from "./ResourceAlreadyExistsFault";
import { SNSInvalidTopicFault } from "./SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "./SNSNoAuthorizationFault";
import { KMSAccessDeniedFault } from "./KMSAccessDeniedFault";
import { KMSDisabledFault } from "./KMSDisabledFault";
import { KMSInvalidStateFault } from "./KMSInvalidStateFault";
import { KMSNotFoundFault } from "./KMSNotFoundFault";
import { KMSThrottlingFault } from "./KMSThrottlingFault";
export type CreateEventSubscriptionExceptionsUnion =
  | ResourceQuotaExceededFault
  | ResourceNotFoundFault
  | ResourceAlreadyExistsFault
  | SNSInvalidTopicFault
  | SNSNoAuthorizationFault
  | KMSAccessDeniedFault
  | KMSDisabledFault
  | KMSInvalidStateFault
  | KMSNotFoundFault
  | KMSThrottlingFault;
