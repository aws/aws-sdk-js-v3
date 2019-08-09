import { InvalidResourceType } from "./InvalidResourceType";
import { InvalidResourceId } from "./InvalidResourceId";
import { InternalServerError } from "./InternalServerError";
import { TooManyUpdates } from "./TooManyUpdates";
export type RemoveTagsFromResourceExceptionsUnion =
  | InvalidResourceType
  | InvalidResourceId
  | InternalServerError
  | TooManyUpdates;
