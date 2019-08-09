import { LimitExceededException } from "./LimitExceededException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidPublicKeyException } from "./InvalidPublicKeyException";
import { DuplicateSSHPublicKeyException } from "./DuplicateSSHPublicKeyException";
import { UnrecognizedPublicKeyEncodingException } from "./UnrecognizedPublicKeyEncodingException";
export type UploadSSHPublicKeyExceptionsUnion =
  | LimitExceededException
  | NoSuchEntityException
  | InvalidPublicKeyException
  | DuplicateSSHPublicKeyException
  | UnrecognizedPublicKeyEncodingException;
