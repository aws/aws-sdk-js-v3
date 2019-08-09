import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
export type StartMatchmakingExceptionsUnion =
  | InvalidRequestException
  | NotFoundException
  | InternalServiceException
  | UnsupportedRegionException;
