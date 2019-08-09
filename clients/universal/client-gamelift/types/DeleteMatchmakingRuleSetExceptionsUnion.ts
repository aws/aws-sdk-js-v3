import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
import { NotFoundException } from "./NotFoundException";
export type DeleteMatchmakingRuleSetExceptionsUnion =
  | InvalidRequestException
  | InternalServiceException
  | UnsupportedRegionException
  | NotFoundException;
