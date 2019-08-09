import { NoSuchEntityException } from "./NoSuchEntityException";
import { UnrecognizedPublicKeyEncodingException } from "./UnrecognizedPublicKeyEncodingException";
export type GetSSHPublicKeyExceptionsUnion =
  | NoSuchEntityException
  | UnrecognizedPublicKeyEncodingException;
