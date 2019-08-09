import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type AllocateConnectionOnInterconnectExceptionsUnion =
  | DirectConnectServerException
  | DirectConnectClientException;
