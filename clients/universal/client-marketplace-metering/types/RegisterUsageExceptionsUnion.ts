import { InvalidProductCodeException } from "./InvalidProductCodeException";
import { InvalidRegionException } from "./InvalidRegionException";
import { InvalidPublicKeyVersionException } from "./InvalidPublicKeyVersionException";
import { PlatformNotSupportedException } from "./PlatformNotSupportedException";
import { CustomerNotEntitledException } from "./CustomerNotEntitledException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { DisabledApiException } from "./DisabledApiException";
export type RegisterUsageExceptionsUnion =
  | InvalidProductCodeException
  | InvalidRegionException
  | InvalidPublicKeyVersionException
  | PlatformNotSupportedException
  | CustomerNotEntitledException
  | ThrottlingException
  | InternalServiceErrorException
  | DisabledApiException;
