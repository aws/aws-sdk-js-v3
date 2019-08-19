import { InvalidRequestException } from "./InvalidRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
export type CreateMatchmakingConfigurationExceptionsUnion =
  | InvalidRequestException
  | LimitExceededException
  | NotFoundException
  | InternalServiceException
  | UnsupportedRegionException;
