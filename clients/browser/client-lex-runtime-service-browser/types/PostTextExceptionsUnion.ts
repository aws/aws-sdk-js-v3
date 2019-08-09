import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { ConflictException } from "./ConflictException";
import { DependencyFailedException } from "./DependencyFailedException";
import { BadGatewayException } from "./BadGatewayException";
import { LoopDetectedException } from "./LoopDetectedException";
export type PostTextExceptionsUnion =
  | NotFoundException
  | BadRequestException
  | LimitExceededException
  | InternalFailureException
  | ConflictException
  | DependencyFailedException
  | BadGatewayException
  | LoopDetectedException;
