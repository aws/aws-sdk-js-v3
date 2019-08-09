import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidTagException } from "./InvalidTagException";
import { TooManyTagsException } from "./TooManyTagsException";
export type AddTagsToCertificateExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArnException
  | InvalidTagException
  | TooManyTagsException;
