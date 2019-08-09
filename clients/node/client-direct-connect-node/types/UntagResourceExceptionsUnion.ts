import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type UntagResourceExceptionsUnion =
  | DirectConnectServerException
  | DirectConnectClientException;
