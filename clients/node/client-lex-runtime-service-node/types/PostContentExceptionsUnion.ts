import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { ConflictException } from "./ConflictException";
import { UnsupportedMediaTypeException } from "./UnsupportedMediaTypeException";
import { NotAcceptableException } from "./NotAcceptableException";
import { RequestTimeoutException } from "./RequestTimeoutException";
import { DependencyFailedException } from "./DependencyFailedException";
import { BadGatewayException } from "./BadGatewayException";
import { LoopDetectedException } from "./LoopDetectedException";
export type PostContentExceptionsUnion =
  | NotFoundException
  | BadRequestException
  | LimitExceededException
  | InternalFailureException
  | ConflictException
  | UnsupportedMediaTypeException
  | NotAcceptableException
  | RequestTimeoutException
  | DependencyFailedException
  | BadGatewayException
  | LoopDetectedException;
