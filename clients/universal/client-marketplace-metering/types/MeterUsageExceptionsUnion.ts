import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { InvalidProductCodeException } from "./InvalidProductCodeException";
import { InvalidUsageDimensionException } from "./InvalidUsageDimensionException";
import { InvalidEndpointRegionException } from "./InvalidEndpointRegionException";
import { TimestampOutOfBoundsException } from "./TimestampOutOfBoundsException";
import { DuplicateRequestException } from "./DuplicateRequestException";
import { ThrottlingException } from "./ThrottlingException";
export type MeterUsageExceptionsUnion =
  | InternalServiceErrorException
  | InvalidProductCodeException
  | InvalidUsageDimensionException
  | InvalidEndpointRegionException
  | TimestampOutOfBoundsException
  | DuplicateRequestException
  | ThrottlingException;
