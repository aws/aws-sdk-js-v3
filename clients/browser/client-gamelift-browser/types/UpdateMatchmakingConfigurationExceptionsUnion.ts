import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
export type UpdateMatchmakingConfigurationExceptionsUnion =
  | InvalidRequestException
  | NotFoundException
  | InternalServiceException
  | UnsupportedRegionException;
