import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInternalException } from "./CloudHsmInternalException";
import { InvalidRequestException } from "./InvalidRequestException";
export type ListHsmsExceptionsUnion =
  | CloudHsmServiceException
  | CloudHsmInternalException
  | InvalidRequestException;
