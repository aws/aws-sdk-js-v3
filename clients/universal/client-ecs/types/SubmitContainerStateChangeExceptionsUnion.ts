import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { AccessDeniedException } from "./AccessDeniedException";
export type SubmitContainerStateChangeExceptionsUnion =
  | ServerException
  | ClientException
  | AccessDeniedException;
