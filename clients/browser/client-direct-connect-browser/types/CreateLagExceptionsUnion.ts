import { DuplicateTagKeysException } from "./DuplicateTagKeysException";
import { TooManyTagsException } from "./TooManyTagsException";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type CreateLagExceptionsUnion =
  | DuplicateTagKeysException
  | TooManyTagsException
  | DirectConnectServerException
  | DirectConnectClientException;
