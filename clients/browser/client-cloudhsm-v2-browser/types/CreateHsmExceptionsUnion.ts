import { CloudHsmInternalFailureException } from "./CloudHsmInternalFailureException";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInvalidRequestException } from "./CloudHsmInvalidRequestException";
import { CloudHsmResourceNotFoundException } from "./CloudHsmResourceNotFoundException";
import { CloudHsmAccessDeniedException } from "./CloudHsmAccessDeniedException";
export type CreateHsmExceptionsUnion =
  | CloudHsmInternalFailureException
  | CloudHsmServiceException
  | CloudHsmInvalidRequestException
  | CloudHsmResourceNotFoundException
  | CloudHsmAccessDeniedException;
