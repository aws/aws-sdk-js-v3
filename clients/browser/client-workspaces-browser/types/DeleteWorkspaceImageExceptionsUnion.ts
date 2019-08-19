import { ResourceAssociatedException } from "./ResourceAssociatedException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { AccessDeniedException } from "./AccessDeniedException";
export type DeleteWorkspaceImageExceptionsUnion =
  | ResourceAssociatedException
  | InvalidResourceStateException
  | AccessDeniedException;
