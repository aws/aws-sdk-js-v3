import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type DescribeInterconnectsExceptionsUnion =
  | DirectConnectServerException
  | DirectConnectClientException;
