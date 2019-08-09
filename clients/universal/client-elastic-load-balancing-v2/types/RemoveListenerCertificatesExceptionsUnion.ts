import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
export type RemoveListenerCertificatesExceptionsUnion =
  | ListenerNotFoundException
  | OperationNotPermittedException;
