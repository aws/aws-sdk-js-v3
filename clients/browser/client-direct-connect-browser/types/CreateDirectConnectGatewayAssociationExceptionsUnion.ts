import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type CreateDirectConnectGatewayAssociationExceptionsUnion =
  | DirectConnectServerException
  | DirectConnectClientException;
