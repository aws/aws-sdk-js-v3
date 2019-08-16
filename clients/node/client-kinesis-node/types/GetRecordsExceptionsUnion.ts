import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ExpiredIteratorException } from "./ExpiredIteratorException";
import { KMSDisabledException } from "./KMSDisabledException";
import { KMSInvalidStateException } from "./KMSInvalidStateException";
import { KMSAccessDeniedException } from "./KMSAccessDeniedException";
import { KMSNotFoundException } from "./KMSNotFoundException";
import { KMSOptInRequired } from "./KMSOptInRequired";
import { KMSThrottlingException } from "./KMSThrottlingException";
export type GetRecordsExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArgumentException
  | ProvisionedThroughputExceededException
  | ExpiredIteratorException
  | KMSDisabledException
  | KMSInvalidStateException
  | KMSAccessDeniedException
  | KMSNotFoundException
  | KMSOptInRequired
  | KMSThrottlingException;
