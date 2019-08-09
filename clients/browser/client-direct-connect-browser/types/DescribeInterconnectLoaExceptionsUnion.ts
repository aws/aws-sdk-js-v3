import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type DescribeInterconnectLoaExceptionsUnion =
  | DirectConnectServerException
  | DirectConnectClientException;
