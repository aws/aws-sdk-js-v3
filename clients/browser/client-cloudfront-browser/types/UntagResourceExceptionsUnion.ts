import { AccessDenied } from "./AccessDenied";
import { InvalidArgument } from "./InvalidArgument";
import { InvalidTagging } from "./InvalidTagging";
import { NoSuchResource } from "./NoSuchResource";
export type UntagResourceExceptionsUnion =
  | AccessDenied
  | InvalidArgument
  | InvalidTagging
  | NoSuchResource;
