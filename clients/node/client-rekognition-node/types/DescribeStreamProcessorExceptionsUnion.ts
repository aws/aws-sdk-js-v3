import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
export type DescribeStreamProcessorExceptionsUnion =
  | AccessDeniedException
  | InternalServerError
  | ThrottlingException
  | InvalidParameterException
  | ResourceNotFoundException
  | ProvisionedThroughputExceededException;
