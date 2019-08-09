import { DuplicateTagKeysException } from "./DuplicateTagKeysException";
import { TooManyTagsException } from "./TooManyTagsException";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type CreateConnectionExceptionsUnion =
  | DuplicateTagKeysException
  | TooManyTagsException
  | DirectConnectServerException
  | DirectConnectClientException;
