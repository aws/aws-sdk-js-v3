import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type AssociateConnectionWithLagExceptionsUnion =
  | DirectConnectServerException
  | DirectConnectClientException;
