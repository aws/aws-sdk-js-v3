import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { KMSDisabledException } from "./KMSDisabledException";
import { KMSInvalidStateException } from "./KMSInvalidStateException";
import { KMSAccessDeniedException } from "./KMSAccessDeniedException";
import { KMSNotFoundException } from "./KMSNotFoundException";
import { KMSOptInRequired } from "./KMSOptInRequired";
import { KMSThrottlingException } from "./KMSThrottlingException";
export type PutRecordExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArgumentException
  | ProvisionedThroughputExceededException
  | KMSDisabledException
  | KMSInvalidStateException
  | KMSAccessDeniedException
  | KMSNotFoundException
  | KMSOptInRequired
  | KMSThrottlingException;
