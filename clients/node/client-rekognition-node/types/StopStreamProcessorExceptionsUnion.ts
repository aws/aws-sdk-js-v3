import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
export type StopStreamProcessorExceptionsUnion =
  | AccessDeniedException
  | InternalServerError
  | ThrottlingException
  | InvalidParameterException
  | ResourceNotFoundException
  | ResourceInUseException
  | ProvisionedThroughputExceededException;
