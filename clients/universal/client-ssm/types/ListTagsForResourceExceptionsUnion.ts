import { InvalidResourceType } from "./InvalidResourceType";
import { InvalidResourceId } from "./InvalidResourceId";
import { InternalServerError } from "./InternalServerError";
export type ListTagsForResourceExceptionsUnion =
  | InvalidResourceType
  | InvalidResourceId
  | InternalServerError;
