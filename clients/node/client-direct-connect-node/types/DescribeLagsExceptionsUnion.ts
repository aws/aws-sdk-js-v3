import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type DescribeLagsExceptionsUnion =
  | DirectConnectServerException
  | DirectConnectClientException;
