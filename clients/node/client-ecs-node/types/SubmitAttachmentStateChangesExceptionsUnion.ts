import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidParameterException } from "./InvalidParameterException";
export type SubmitAttachmentStateChangesExceptionsUnion =
  | ServerException
  | ClientException
  | AccessDeniedException
  | InvalidParameterException;
