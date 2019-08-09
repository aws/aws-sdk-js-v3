import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InternalErrorException } from "./InternalErrorException";
import { NotFoundException } from "./NotFoundException";
import { EndpointDisabledException } from "./EndpointDisabledException";
import { PlatformApplicationDisabledException } from "./PlatformApplicationDisabledException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { KMSDisabledException } from "./KMSDisabledException";
import { KMSInvalidStateException } from "./KMSInvalidStateException";
import { KMSNotFoundException } from "./KMSNotFoundException";
import { KMSOptInRequired } from "./KMSOptInRequired";
import { KMSThrottlingException } from "./KMSThrottlingException";
import { KMSAccessDeniedException } from "./KMSAccessDeniedException";
import { InvalidSecurityException } from "./InvalidSecurityException";
export type PublishExceptionsUnion =
  | InvalidParameterException
  | InvalidParameterValueException
  | InternalErrorException
  | NotFoundException
  | EndpointDisabledException
  | PlatformApplicationDisabledException
  | AuthorizationErrorException
  | KMSDisabledException
  | KMSInvalidStateException
  | KMSNotFoundException
  | KMSOptInRequired
  | KMSThrottlingException
  | KMSAccessDeniedException
  | InvalidSecurityException;
