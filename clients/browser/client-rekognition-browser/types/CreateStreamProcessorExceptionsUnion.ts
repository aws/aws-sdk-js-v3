import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { InvalidParameterException } from "./InvalidParameterException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
export type CreateStreamProcessorExceptionsUnion =
  | AccessDeniedException
  | InternalServerError
  | ThrottlingException
  | InvalidParameterException
  | LimitExceededException
  | ResourceInUseException
  | ProvisionedThroughputExceededException;
