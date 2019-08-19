import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
export type DeleteCertificateExceptionsUnion =
  | ResourceNotFoundFault
  | InvalidResourceStateFault;
