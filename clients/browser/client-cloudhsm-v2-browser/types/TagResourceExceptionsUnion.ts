import { CloudHsmInternalFailureException } from "./CloudHsmInternalFailureException";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmResourceNotFoundException } from "./CloudHsmResourceNotFoundException";
import { CloudHsmInvalidRequestException } from "./CloudHsmInvalidRequestException";
import { CloudHsmAccessDeniedException } from "./CloudHsmAccessDeniedException";
export type TagResourceExceptionsUnion =
  | CloudHsmInternalFailureException
  | CloudHsmServiceException
  | CloudHsmResourceNotFoundException
  | CloudHsmInvalidRequestException
  | CloudHsmAccessDeniedException;
