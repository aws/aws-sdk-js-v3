import { ArnNotSupportedException } from "./ArnNotSupportedException";
import { InvalidArnException } from "./InvalidArnException";
import { ResourceArnRequiredException } from "./ResourceArnRequiredException";
export type ListTagsForResourceExceptionsUnion =
  | ArnNotSupportedException
  | InvalidArnException
  | ResourceArnRequiredException;
