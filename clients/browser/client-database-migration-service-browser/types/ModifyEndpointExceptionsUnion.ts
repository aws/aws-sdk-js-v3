import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { ResourceAlreadyExistsFault } from "./ResourceAlreadyExistsFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { AccessDeniedFault } from "./AccessDeniedFault";
export type ModifyEndpointExceptionsUnion =
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | ResourceAlreadyExistsFault
  | KMSKeyNotAccessibleFault
  | AccessDeniedFault;
