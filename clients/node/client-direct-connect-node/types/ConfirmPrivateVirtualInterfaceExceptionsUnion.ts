import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type ConfirmPrivateVirtualInterfaceExceptionsUnion =
  | DirectConnectServerException
  | DirectConnectClientException;
