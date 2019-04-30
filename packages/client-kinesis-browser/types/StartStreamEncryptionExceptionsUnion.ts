import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { KMSDisabledException } from "./KMSDisabledException";
import { KMSInvalidStateException } from "./KMSInvalidStateException";
import { KMSAccessDeniedException } from "./KMSAccessDeniedException";
import { KMSNotFoundException } from "./KMSNotFoundException";
import { KMSOptInRequired } from "./KMSOptInRequired";
import { KMSThrottlingException } from "./KMSThrottlingException";
export type StartStreamEncryptionExceptionsUnion =
  | InvalidArgumentException
  | LimitExceededException
  | ResourceInUseException
  | ResourceNotFoundException
  | KMSDisabledException
  | KMSInvalidStateException
  | KMSAccessDeniedException
  | KMSNotFoundException
  | KMSOptInRequired
  | KMSThrottlingException;
