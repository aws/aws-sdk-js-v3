import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type ConfirmPublicVirtualInterfaceExceptionsUnion =
  | DirectConnectServerException
  | DirectConnectClientException;
