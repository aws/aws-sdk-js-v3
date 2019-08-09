import { InvalidInputException } from "./InvalidInputException";
import { InvalidTagException } from "./InvalidTagException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
export type DeleteTagsExceptionsUnion =
  | InvalidInputException
  | InvalidTagException
  | ResourceNotFoundException
  | InternalServerException;
