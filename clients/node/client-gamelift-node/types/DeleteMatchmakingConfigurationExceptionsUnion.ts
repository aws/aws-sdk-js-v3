import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
export type DeleteMatchmakingConfigurationExceptionsUnion =
  | InvalidRequestException
  | NotFoundException
  | InternalServiceException
  | UnsupportedRegionException;
