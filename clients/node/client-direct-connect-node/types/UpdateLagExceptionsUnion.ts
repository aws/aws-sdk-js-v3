import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type UpdateLagExceptionsUnion =
  | DirectConnectServerException
  | DirectConnectClientException;
