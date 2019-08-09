import { AccessDeniedException } from "./AccessDeniedException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidS3ObjectException } from "./InvalidS3ObjectException";
import { InternalServerError } from "./InternalServerError";
import { VideoTooLargeException } from "./VideoTooLargeException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
export type StartPersonTrackingExceptionsUnion =
  | AccessDeniedException
  | IdempotentParameterMismatchException
  | InvalidParameterException
  | InvalidS3ObjectException
  | InternalServerError
  | VideoTooLargeException
  | ProvisionedThroughputExceededException
  | LimitExceededException
  | ThrottlingException;
