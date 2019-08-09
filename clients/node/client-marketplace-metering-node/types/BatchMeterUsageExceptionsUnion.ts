import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { InvalidProductCodeException } from "./InvalidProductCodeException";
import { InvalidUsageDimensionException } from "./InvalidUsageDimensionException";
import { InvalidCustomerIdentifierException } from "./InvalidCustomerIdentifierException";
import { TimestampOutOfBoundsException } from "./TimestampOutOfBoundsException";
import { ThrottlingException } from "./ThrottlingException";
import { DisabledApiException } from "./DisabledApiException";
export type BatchMeterUsageExceptionsUnion =
  | InternalServiceErrorException
  | InvalidProductCodeException
  | InvalidUsageDimensionException
  | InvalidCustomerIdentifierException
  | TimestampOutOfBoundsException
  | ThrottlingException
  | DisabledApiException;
