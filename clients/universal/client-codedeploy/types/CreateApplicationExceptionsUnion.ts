import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { ApplicationAlreadyExistsException } from "./ApplicationAlreadyExistsException";
import { ApplicationLimitExceededException } from "./ApplicationLimitExceededException";
import { InvalidComputePlatformException } from "./InvalidComputePlatformException";
import { InvalidTagsToAddException } from "./InvalidTagsToAddException";
export type CreateApplicationExceptionsUnion =
  | ApplicationNameRequiredException
  | InvalidApplicationNameException
  | ApplicationAlreadyExistsException
  | ApplicationLimitExceededException
  | InvalidComputePlatformException
  | InvalidTagsToAddException;
