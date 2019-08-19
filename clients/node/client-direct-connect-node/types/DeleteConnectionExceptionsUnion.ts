import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type DeleteConnectionExceptionsUnion =
  | DirectConnectServerException
  | DirectConnectClientException;
