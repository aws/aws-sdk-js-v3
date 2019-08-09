import { InternalServerError } from "./InternalServerError";
import { OpsItemNotFoundException } from "./OpsItemNotFoundException";
import { OpsItemAlreadyExistsException } from "./OpsItemAlreadyExistsException";
import { OpsItemLimitExceededException } from "./OpsItemLimitExceededException";
import { OpsItemInvalidParameterException } from "./OpsItemInvalidParameterException";
export type UpdateOpsItemExceptionsUnion =
  | InternalServerError
  | OpsItemNotFoundException
  | OpsItemAlreadyExistsException
  | OpsItemLimitExceededException
  | OpsItemInvalidParameterException;
