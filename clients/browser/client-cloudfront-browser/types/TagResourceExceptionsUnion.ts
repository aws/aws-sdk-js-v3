import { AccessDenied } from "./AccessDenied";
import { InvalidArgument } from "./InvalidArgument";
import { InvalidTagging } from "./InvalidTagging";
import { NoSuchResource } from "./NoSuchResource";
export type TagResourceExceptionsUnion =
  | AccessDenied
  | InvalidArgument
  | InvalidTagging
  | NoSuchResource;
