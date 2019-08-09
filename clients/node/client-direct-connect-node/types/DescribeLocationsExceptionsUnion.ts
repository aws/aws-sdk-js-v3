import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type DescribeLocationsExceptionsUnion =
  | DirectConnectServerException
  | DirectConnectClientException;
