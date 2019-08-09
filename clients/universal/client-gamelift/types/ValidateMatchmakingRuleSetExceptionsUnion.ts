import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
import { InvalidRequestException } from "./InvalidRequestException";
export type ValidateMatchmakingRuleSetExceptionsUnion =
  | InternalServiceException
  | UnsupportedRegionException
  | InvalidRequestException;
