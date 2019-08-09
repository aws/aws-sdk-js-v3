import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type CreateBGPPeerExceptionsUnion =
  | DirectConnectServerException
  | DirectConnectClientException;
