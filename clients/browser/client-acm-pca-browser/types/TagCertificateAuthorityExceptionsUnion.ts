import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidStateException } from "./InvalidStateException";
import { InvalidTagException } from "./InvalidTagException";
import { TooManyTagsException } from "./TooManyTagsException";
export type TagCertificateAuthorityExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArnException
  | InvalidStateException
  | InvalidTagException
  | TooManyTagsException;
