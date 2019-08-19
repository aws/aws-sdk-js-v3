import { InvalidArn } from "./InvalidArn";
import { ResourceNotFound } from "./ResourceNotFound";
import { TooManyTags } from "./TooManyTags";
export type TagResourceExceptionsUnion =
  | InvalidArn
  | ResourceNotFound
  | TooManyTags;
