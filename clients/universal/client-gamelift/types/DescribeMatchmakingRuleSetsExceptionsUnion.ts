import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
export type DescribeMatchmakingRuleSetsExceptionsUnion =
  | InvalidRequestException
  | InternalServiceException
  | NotFoundException
  | UnsupportedRegionException;
