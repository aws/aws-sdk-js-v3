import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type DeleteLagExceptionsUnion =
  | DirectConnectServerException
  | DirectConnectClientException;
