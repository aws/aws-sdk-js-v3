import { InvalidResourceType } from "./InvalidResourceType";
import { InvalidResourceId } from "./InvalidResourceId";
import { InternalServerError } from "./InternalServerError";
import { TooManyTagsError } from "./TooManyTagsError";
import { TooManyUpdates } from "./TooManyUpdates";
export type AddTagsToResourceExceptionsUnion =
  | InvalidResourceType
  | InvalidResourceId
  | InternalServerError
  | TooManyTagsError
  | TooManyUpdates;
