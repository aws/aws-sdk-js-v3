import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceException } from "./InternalServiceException";
import { ThrottlingException } from "./ThrottlingException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type GetCurrentMetricDataExceptionsUnion =
  | InvalidRequestException
  | InvalidParameterException
  | InternalServiceException
  | ThrottlingException
  | ResourceNotFoundException;
