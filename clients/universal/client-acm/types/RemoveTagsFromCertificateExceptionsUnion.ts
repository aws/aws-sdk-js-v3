import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidTagException } from "./InvalidTagException";
export type RemoveTagsFromCertificateExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArnException
  | InvalidTagException;
