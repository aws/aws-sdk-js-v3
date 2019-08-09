import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
export type DescribeMatchmakingExceptionsUnion =
  | InvalidRequestException
  | InternalServiceException
  | UnsupportedRegionException;
