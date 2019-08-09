import { InternalServerError } from "./InternalServerError";
import { OpsItemAlreadyExistsException } from "./OpsItemAlreadyExistsException";
import { OpsItemLimitExceededException } from "./OpsItemLimitExceededException";
import { OpsItemInvalidParameterException } from "./OpsItemInvalidParameterException";
export type CreateOpsItemExceptionsUnion =
  | InternalServerError
  | OpsItemAlreadyExistsException
  | OpsItemLimitExceededException
  | OpsItemInvalidParameterException;
