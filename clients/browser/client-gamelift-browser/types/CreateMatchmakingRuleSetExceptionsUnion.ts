import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
export type CreateMatchmakingRuleSetExceptionsUnion =
  | InvalidRequestException
  | InternalServiceException
  | UnsupportedRegionException;
